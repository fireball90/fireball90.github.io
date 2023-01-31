import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export function PizzaListPage() {

    const[pizzas,setPizzas] = useState([]);
    const[isFetchPending, setFetchPending] = useState(false);
    useEffect(() => {
        setFetchPending(true);
        fetch("http://sulla.ddns.net:8080/Pizza")
            .then((res) => res.json())
            .then((pizzak) => setPizzas(pizzak))
            .catch(console.log)
            .finally(() => {
                setFetchPending(false);
            });
    }, []);
    return (
        <div className="p-5 m-auto text-center content bg-ivory">
            {isFetchPending ? (
                <div className="spinner-border"></div>
            ) : (
                <div>
                    <h2>Pizzák</h2>
                    {pizzas.map((pizza)=>(
                        <NavLink key={pizza.id} to={"/pizza/" + pizza.id}>
                            <div className="card col-sm-3 d-inline-block m-1 p-2">
                                <p className="text-dark">{pizza.name}</p>
                                <p className="text-danger">Gluténmentes: {pizza.isGlutenFree>0? "igen" : "nem" }</p>
                                <div className="card-body">
                                    <img alt={pizza.name}
                                    className="img-fluid"
                                    style={{maxHeight: 200}}
                                    src={pizza.kepURL ? pizza.kepURL : 
                                    "https://via.placeholder.com/400x800"} 
                                    />
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
}
export default PizzaListPage;