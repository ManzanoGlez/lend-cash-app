import React, { useEffect } from "react";
import { Col, Dropdown, Image, Row, Table } from "react-bootstrap";
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
        number_rows: 5,
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
        <CardContainer title="Usuarios">
            <Row>
                <Col md={2}>
                    <a className="btn btn-app mb-3" href="/crud/form">
                        <i className="fa fa-plus" aria-hidden="true"></i> Nuevo
                    </a>
                </Col>
            </Row>

            <div id="crud-users">
                <Row>
                    <Col sm={12} lg={9}>
                        <Dropdown>
                            <Dropdown.Toggle variant="" size="sm">
                                Registros: {values.number_rows} 
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item
                                    onClick={() =>
                                        setInputValue("number_rows", 5)
                                    }
                                >
                                    5
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() =>
                                        setInputValue("number_rows", 10)
                                    }
                                >
                                    10
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() =>
                                        setInputValue("number_rows", 25)
                                    }
                                >
                                    25
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() =>
                                        setInputValue("number_rows", 50)
                                    }
                                >
                                    50
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() =>
                                        setInputValue("number_rows", 100)
                                    }
                                >
                                    100
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col sm={12} lg={3}>
                        <div className="input-group mb-3 search-box">
                            <IconApp iconClassName="fas fa-search" />
                            <input
                                type="text"
                                className="form-control dataTable__search-input"
                                placeholder="Buscar"
                                maxLength="20"
                                name="query"
                                value={values.query}
                                onChange={handleInputChange}
                            />
                        </div>
                    </Col>
                </Row>

                <div className="table-responsive border-radios-5">
                    <Table striped bordered hover size="sm">
                        <thead className="thead-light">
                            <tr className="text-center">
                                <th scope="col">Usuario</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Por</th>
                                <th scope="col">Acciónes</th>
                            </tr>
                        </thead>
                        <tbody className="animate__animated animate__animate__fadeInDown animate__slow">
                            {data.map(
                                ({
                                    id,
                                    username,
                                    email,
                                    telephone,
                                    auth_by,
                                    img,
                                }) => (
                                    <tr key={id}>
                                        <td>
                                            <AvatarApp
                                                img={img}
                                                textToGenerateAvatar={email}
                                                size={10}
                                                maxHeight={30}
                                            />
                                            {username}
                                        </td>
                                        <td>{email}</td>
                                        <td>
                                            {telephone
                                                ? telephone
                                                : "Sin agregar"}
                                        </td>
                                        <td className="text-center">
                                            <Image
                                                src={
                                                    auth_by === "email"
                                                        ? "/assets/img/by_email.svg"
                                                        : "/assets/img/by_google.svg"
                                                }
                                                style={{ height: 25 }}
                                            />
                                        </td>
                                        <td className="text-center">
                                            <div>
                                                <IconApp
                                                    iconClassName="fas fa-edit mx-2"
                                                    color="#495057"
                                                    isClickable={true}
                                                    onClick={() =>
                                                        console.log(
                                                            "editar alert",
                                                            id
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
                                                            id
                                                        )
                                                    }
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>

                        {total === 0 && (
                            <p className="no-results-table">Sin resultados.</p>
                        )}
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
