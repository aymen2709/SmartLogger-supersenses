
const EspaceCarriereBody = () => {

    return (
        <div className="espCarr" >
            <div className="row">
                <div className="col">
                    <div className="img-thumbnail shadow " id="EspaceCarriereBody">
                        bonjour
                    </div>

                </div>
                <div>
                </div>
            </div>
            <br></br><button type="button" className="btn btn-info justify-content-center" style={{ width: "20%", marginLeft: "66.8%", marginTop: "3%", marginBottom: "1%" }}>Info</button>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-outline-secondary" id="CarriereButtomSauv"><i className="bi bi-bookmark-fill"></i> Sauvegarder</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-outline-secondary" id="CarriereButtomPart" ><i className="bi bi-box-arrow-up-right"></i>  Partager</button>
                </div>
            </div>


        </div>
    );

};
export default EspaceCarriereBody;