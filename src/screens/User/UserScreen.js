import React from "react";
import { CardContainer } from "../../components/Dashboard/CardContainer";
import { IconApp } from "../../components/IconApp";

export const UserScreen = () => {
    return (
        <CardContainer title="Inicio">
            <div className="row">
                <div className="col-md-2">
                    <a className="btn btn-app mb-3" href="/crud/form">
                        <i className="fa fa-plus" aria-hidden="true"></i> Nuevo
                    </a>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-sm-12">
                    <div className="input-group mb-3 search-box">
                        <i className="fas fa-search" aria-hidden="true"></i>
                        <input
                            type="text"
                            className="form-control dataTable__search-input"
                            placeholder="Buscar"
                            aria-label="Buscar"
                            aria-describedby="search-component"
                        />
                    </div>
                </div>
            </div>

            <div className="table-responsive border-radios-5">
                <table className="table table-striped">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Acciónes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Jorge Manzano</td>
                            <td>manzano@gmail.com</td>
                            <td>3314598239</td>
                            <td>
                                <div>
                                    <IconApp iconClassName="fas fa-edit mx-2" />
                                    <IconApp iconClassName="fas fa-trash mx-2" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="float-right">
                <nav aria-label="Pagination">
                    <ul className="pagination">
                        <li className="page-item">
                            <a
                                className="page-link"
                                href="/auth/users"
                                aria-label="Previous"
                            >
                                «<span className="sr-only">«</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="/auth/users">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="/auth/users">
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="/auth/users">
                                3
                            </a>
                        </li>
                        <li className="page-item">
                            <a
                                className="page-link"
                                href="/auth/users"
                                aria-label="Next"
                            >
                                »<span className="sr-only">»</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </CardContainer>
    );
};
