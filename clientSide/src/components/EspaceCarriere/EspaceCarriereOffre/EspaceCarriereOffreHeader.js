
const EspaceCarriereOffreHeader = () => {

    return (
        <div className="EspaceHeader">
            <h1 className="text-center" style={{ paddingBottom: "10%" }}>Espace Carriere</h1>
            <div className="container">
                <div >
                    <div className="img-thumbnail shadow" style={{ borderRadius: "12px", width: "12%", marginLeft: "28.5%", height: "25px", fontSize: "12px", backgroundColor: "rgb(237,237,239)" }}><i className="bi bi-clock-fill"></i> Publié il y a 6 jours</div>
                    <div className="img-thumbnail shadow" style={{ borderRadius: "12px", width: "12%", marginLeft: "42%", marginTop: "-2%", height: "25px", fontSize: "12px", backgroundColor: "rgb(224,240,253)" }}> <i className="bi bi-geo-alt-fill"></i> Sousse - Tunisie</div>
                </div><br></br>
                <div className="row">
                    <div className="col" >
                        <div className="img-thumbnail shadow " id="boxImg">image</div>

                    </div>
                    <div className="col">

                        Développeur WEB Full Stack Symfony 3/4 (H/F)
                        <p>Digital Cooperate</p>
                        <p>N'attendez pas pour vous garantir ce poste</p>
                        <button type="button" className="btn btn-info btn-sm " style={{ borderRadius: "15px", color: "whitesmoke" }} >Postuler Maintenant </button>
                    </div>


                    <div className="col">
                        <div className="img-thumbnail shadow" id="boxTable">

                            <table className="table table-bordered">
                                <thead>
                                    <tr>

                                        <th scope="col">Type d'emploi désiré :</th>
                                        <th scope="col">Experience :</th>
                                        <th scope="col">Rémunération proposée :</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>CDI</th>
                                        <td>Mark</td>
                                        <td>Otto</td>

                                    </tr>
                                    <tr>
                                        <th >2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

};
export default EspaceCarriereOffreHeader; 