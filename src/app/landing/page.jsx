import "../landing/page.styles.css";

function landing() {

    return (
        <>
            <div className="all-elements">

                <div className="principal">
                    <h1>Sección Principal</h1>
                    <div className="title-description-text">
                        <h2 >Título</h2>
                        <p >Descripción</p>
                    </div>

                    <div className="log-in-candidates">
                        <p>Log in candidatos</p>
                    </div>

                    <div className="log-in-companies">
                        <p>Log in empresas</p>
                    </div>

                    <div className="image">
                        <p className="image-position">imagen representativa del proyecto</p>
                    </div>
                </div>

                <div className="project">
                    <h1>Sección "proyecto"</h1>
                    <div className="project-image">
                        <p>imagen representativa del proyecto</p>
                    </div>
                    <div className="project-text">
                        <p>Breve texto sobre el proyecto</p>
                        <div>
                            <button>Botón a "proyecto"</button>
                        </div>
                    </div>
                </div>

                <div>
                    <h1>Sección "Publicaciones"</h1>
                    <div className="posts">

                        <div>
                            <h3>Empresa/Título del puesto</h3>
                            <p>Breve descripción del puesto</p>
                            <button>Ver más</button>
                        </div>
                        <div>
                            <h3>Empresa/Título del puesto</h3>
                            <p>Breve descripción del puesto</p>
                            <button>Ver más</button>
                        </div>
                        <div>
                            <h3>Empresa/Título del puesto</h3>
                            <p>Breve descripción del puesto</p>
                            <button>Ver más</button>
                        </div>
                        <div>
                            <h3>Empresa/Título del puesto</h3>
                            <p>Breve descripción del puesto</p>
                            <button>Ver más</button>
                        </div>
                    </div>
                </div>

                <div className="companies">
                    <h1>Sección "empresas que confian en nosotros"</h1>
                    <div className="companies-elements">
                        <button>Flecha izquierda</button>
                        <p>Empresa 1</p>
                        <p>Empresa 2</p>
                        <p>Empresa 3</p>
                        <button>Flecha derecha</button>
                    </div>
                </div>

                <div>
                    <h1>Sección "suscripciones"</h1>
                    <div className="subscriptions">
                        <div>
                            <h3>Plan 1</h3>
                            <p>Texto sobre beneficios del plan</p>
                            <button>Comprar</button>
                        </div>
                        <div>
                            <h3>Plan 2</h3>
                            <p>Texto sobre beneficios del plan</p>
                            <button>Comprar</button>
                        </div>
                        <div>
                            <h3>Plan 3</h3>
                            <p>Texto sobre beneficios del plan</p>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default landing;