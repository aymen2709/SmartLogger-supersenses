import NosSolutionPa from './NosSolutionPa';
import NosSolutionHodhod from './NosSolutionHodhod';

//import ImpactPictures from './ImpactPictures';
import Layout from '../Layout/Layout';
const NosSolution = () => {

    return (
        <Layout>
            <div className="NosSolution">
                <div className="bgSolutionImg">
                </div>
                <div >
                    <NosSolutionPa />
                    <NosSolutionHodhod />
                </div>

            </div>
        </Layout>

    );
}
export default NosSolution;