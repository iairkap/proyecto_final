import Image from "next/image";
import imagen_1 from "../../images/imagen_1.png";
import imagen_2 from "../../images/imagen_2.png";
import imagen_3 from "../../images/imagen_3.png";
import "../landing/page.styles.css";

function landing() {

    return (
        <>
            <div className="all-elements">

                <div className="principal">
                    {/* <h1>Sección Principal</h1> */}
                    <div className="title-description-text">
                        <h2 >We connect IT Talent with Israel’s Companies</h2>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget felis et urna mollis tincidunt. Proin felis sem, aliquet eu turpis eget, consectetur suscipit magna. Curabitur et quam eu ante gravida ultricies. </p>
                    </div>

                    <div className="log-in-candidates">
                        <button>Log in candidatos</button>
                    </div>

                    <div className="log-in-companies">
                        <button>Log in empresas</button>
                    </div>

                    <Image src={imagen_1} alt="image" className="principal-image" />

                </div>

                <div className="project">
                    {/* <h1>Sección "proyecto"</h1> */}
                    <Image src={imagen_2} alt="image" className="project-image" />
                    <div className="project-text">
                        <h2>Title about our mission</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget felis et urna mollis tincidunt. Proin felis sem, aliquet eu turpis eget, consectetur suscipit magna. Curabitur et quam eu ante gravida ultricies. Etiam pharetra pretium sem, sit amet porta metus mollis at. Donec eget purus varius, imperdiet diam sed, porttitor metus. Cras luctus sit amet nunc ut malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus maximus ornare mi nec semper. Phasellus et sapien odio. Pellentesque laoreet tortor iaculis nibh aliquam tempor. Vivamus vehicula iaculis velit a fermentum.</p>
                        <div>
                            <button>Botón a "proyecto"</button>
                        </div>
                    </div>
                </div>

                <div>
                    {/* <h1>Sección "Publicaciones"</h1> */}
                    <div className="posts">

                        <div className="post">
                            <h3>Título del puesto</h3>
                            <p>Posición</p>
                            <button>Ver más</button>
                        </div>
                        <div className="post">
                            <h3>Título del puesto</h3>
                            <p>Posición</p>
                            <button>Ver más</button>
                        </div>
                        <div className="post">
                            <h3>Título del puesto</h3>
                            <p>Posición</p>
                            <button>Ver más</button>
                        </div>
                        <div className="post">
                            <h3>Título del puesto</h3>
                            <p>Posición</p>
                            <button>Ver más</button>
                        </div>
                    </div>
                    <Image src={imagen_3} alt="image" className="posts-image" />
                </div>

                <div className="companies">
                    {/* <h1>Sección "empresas que confian en nosotros"</h1> */}
                    <div className="companies-elements">
                        <button>Flecha izquierda</button>
                        <p>Empresa 1</p>
                        <p>Empresa 2</p>
                        <p>Empresa 3</p>
                        <button>Flecha derecha</button>
                    </div>
                </div>

                <div>
                    {/* <h1>Sección "suscripciones"</h1> */}
                    <div className="subscriptions">
                        <div>
                            <h3>Plan 1</h3>
                            <h4>$ 0</h4>
                            <button>Comprar</button>
                            <p>Texto sobre beneficios del plan</p>
                        </div>
                        <div>
                            <h3>Plan 2</h3>
                            <h4>$ 15</h4>
                            <button>Comprar</button>
                            <p>Texto sobre beneficios del plan</p>
                        </div>
                        <div>
                            <h3>Plan 3</h3>
                            <h4>$ 35</h4>
                            <button>Comprar</button>
                            <p>Texto sobre beneficios del plan</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default landing;