import style from './Admin.module.css'
import React from 'react';
import Modal from '../../components/modal/Modal'
import { useState, useEffect } from 'react';

export default function Admin() {
  const [showVerifyEmailModal, setShowVerifyEmailModal] = useState(false);
  const [logIds, setLogIds] = useState([])
  const [messages, setMessages] = useState([])


  const fetchMessages = (log_id) => {
    fetch(`http://127.0.0.1:8000/all_logs/${log_id}`)
      .then(response => response.json())
      .then(data =>
        setMessages(data),
        setShowVerifyEmailModal(true)
      )
      .catch(error => {
        console.error('GET request failed:', error);
      });
  };

  const fetchLogs = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/logs/');
      if (response.ok) {
        const jsonData = await response.json();
        setLogIds(jsonData);
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {


    fetchLogs();
  }, []);

  return (
    <div>

      <div className="d-flex justify-content-center align-items-center">
        {showVerifyEmailModal ? (
          <Modal
            title="Messages"
            onHide={() => setShowVerifyEmailModal(false)}
          >
            {messages.map((msg, index) => (
              <div className={style.openRow} key={index}>
                <div>
                  <h6>Time: {msg.date}</h6>
                </div>
                <div className={style.msgRow}>
                  <div className={style.border}>
                    <h6>Question:</h6>
                    <hr></hr>
                    <p>{msg.question}</p>
                  </div>
                  <div className={style.border}>
                    <h6>Answer:</h6>
                    <hr></hr>
                    <p>{msg.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </Modal>
        ) : null}
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <div className={style.container}>
          {logIds.map((log_id, index) => (
            <div className={style.logRow} key={index} onClick={() => fetchMessages(log_id)}>
              <p>ID: {log_id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}