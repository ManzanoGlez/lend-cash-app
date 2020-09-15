import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { AvatarApp } from "../../components/AvatarApp";
import { CardContainer } from "../../components/Dashboard/CardContainer";
import { IconApp } from "../../components/IconApp";
import { useForm } from "../../hooks/useForm";
import { startShowUsers } from "../../redux/actions/users";

export const UserScreen = () => {
    const dispatch = useDispatch();
    const { data, pagination } = useSelector((state) => state.user);
    const { last_page, current_page, total, from, to, per_page } = pagination;
    const { values, handleInputChange, setInputValue } = useForm({
        page: 1,
        query: "",
        errors: {},
    });

    useEffect(() => {
        dispatch(startShowUsers(values));
    }, [values, dispatch]);

    useEffect(() => {
        //Actualiza la pagina a la primera en caso de no a ver resultados en la pagina donde estes hoja
        if (last_page > 0 && current_page > last_page) {
            setInputValue("page", 1);
        }
    }, [setInputValue, current_page, last_page]);

    return (
        <CardContainer title="Inicio">
            <div className="row">
                <div className="col-md-2">
                    <a className="btn btn-app mb-3" href="/crud/form">
                        <i className="fa fa-plus" aria-hidden="true"></i> Nuevo
                    </a>
                </div>
            </div>

            <div id="crud-users">
                <div className="row">
                    <div className="col-lg-3 col-sm-12">
                        <div className="input-group mb-3 search-box">
                            <i className="fas fa-search" aria-hidden="true"></i>
                            <input
                                type="text"
                                className="form-control dataTable__search-input"
                                placeholder="Buscar"
                                aria-label="Buscar"
                                maxLength="20"
                                aria-describedby="search-component"
                                name="query"
                                value={values.query}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="table-responsive border-radios-5">
                    <Table striped bordered hover size="sm">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Nombre(s)</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Acciónes</th>
                            </tr>
                        </thead>
                        <tbody className="animate__animated animate__animate__fadeInDown animate__slow">
                            {data.map((user) => (
                                <tr key={user.id}>
                                    <td>
                                        <AvatarApp
                                            img={user.img}
                                            textToGenerateAvatar={user.email}
                                            size={20}
                                        />
                                        {user.name}
                                    </td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.telephone}</td>
                                    <td>
                                        <div>
                                            <IconApp
                                                iconClassName="fas fa-edit mx-2"
                                                color="#495057"
                                                isClickable={true}
                                                onClick={() =>
                                                    console.log(
                                                        "editar alert",
                                                        user.id
                                                    )
                                                }
                                            />
                                            <IconApp
                                                iconClassName="fas fa-trash mx-2"
                                                color="#495057"
                                                isClickable={true}
                                                onClick={() =>
                                                    console.log(
                                                        "Eliminar alert",
                                                        user.id
                                                    )
                                                }
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                   
                        {total === 0  && <p className="no-results-table">Sin resultados.</p>}
                   
                    </Table>
                </div>

                <div className="float-left">
                    <small>
                        Mostrando {from} a {to} de {total} resultados.
                    </small>
                </div>

                <div className="float-right">
                    <Pagination
                        totalItemsCount={total || 0}
                        activePage={current_page}
                        itemsCountPerPage={per_page}
                        pageRangeDisplayed={10}
                        itemClass="page-item"
                        linkClass="page-link"
                        onChange={(pagePagination) =>
                            setInputValue("page", pagePagination)
                        }
                    />
                </div>
            </div>
        </CardContainer>
    );
};
