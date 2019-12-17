import { Route, Redirect} from 'react-router-dom';
import React, {Suspense, lazy, Fragment} from 'react';

import {
    ToastContainer,
} from 'react-toastify';
import BounceLoader from 'react-spinners/BounceLoader';


const Dashboards = lazy(() => import('../../DemoPages/Dashboards'));
const Login = lazy(() => import('../../DemoPages/Login/login'));
const Home = lazy(() => import('../../DemoPages/HomePage/home'));
const PlanningPage = lazy(() => import('../../DemoPages/PlanningPage'));
const EmployesPage = lazy(() => import('../../DemoPages/EmployesPage'));
const UtilisateursPage = lazy(() => import('../../DemoPages/UtilisateursPage'));
const ParametresPage = lazy(() => import('../../DemoPages/ParametresPage'));
const Widgets = lazy(() => import('../../DemoPages/Widgets'));
const Elements = lazy(() => import('../../DemoPages/Elements'));
const Components = lazy(() => import('../../DemoPages/Components'));
const Charts = lazy(() => import('../../DemoPages/Charts'));
const Forms = lazy(() => import('../../DemoPages/Forms'));
const Tables = lazy(() => import('../../DemoPages/Tables'));
const EmployeCreate = lazy(()=>import('../../DemoPages/EmployesPage/EmployeCreate'))


const AppMain = () => {
    return (
        <Fragment>

            {/* Components */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-5">
                            Please wait while we load all the Components examples
                            <small>Because this is a demonstration we load at once all the Components examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/components" component={Components}/>
            </Suspense>

            {/* Forms */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-5">
                            Please wait while we load all the Forms examples
                            <small>Because this is a demonstration we load at once all the Forms examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/forms" component={Forms}/>
            </Suspense>

            {/* Charts */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait while we load all the Charts examples
                            <small>Because this is a demonstration we load at once all the Charts examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/charts" component={Charts}/>
            </Suspense>

            {/* Tables */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-5">
                            Please wait while we load all the Tables examples
                            <small>Because this is a demonstration we load at once all the Tables examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/tables" component={Tables}/>
            </Suspense>

            {/* Elements */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait while we load all the Elements examples
                            <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/elements" component={Elements}/>
            </Suspense>

            {/* Dashboard Widgets */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait while we load all the Dashboard Widgets examples
                            <small>Because this is a demonstration we load at once all the Dashboard Widgets examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/widgets" component={Widgets}/>
            </Suspense>

            {/* Dashboards */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            <BounceLoader/>

                           Merci de patienter ...
                            <small></small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/dashboards" component={Dashboards}/>
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                           <BounceLoader/>

                           Merci de patienter ...
                            <small></small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/login" component={Login}/>
            </Suspense>
           
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                        <BounceLoader/>

                           Merci de patienter ...
                            <small></small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/dashboard" component={Home}/>
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                        <BounceLoader/>

                           Merci de patienter ...
                            <small></small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/profile" component={Home}/>
            </Suspense>
           
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                        <BounceLoader/>

                           Merci de patienter ...
                            <small></small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/planning" component={PlanningPage}/>
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                          <BounceLoader/>

                           Merci de patienter ...
                            <small></small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/employes" component={EmployesPage}/>
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                        <BounceLoader/>

                           Merci de patienter ...
                            <small></small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/utilisateurs" component={UtilisateursPage}/>
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                        <BounceLoader/>

                           Merci de patienter ...
                            <small></small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/parametres" component={ParametresPage}/>
            </Suspense>
            {/* <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                           Merci de patienter ...
                            <small></small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/creerEmploye" component={EmployeCreate}/>
            </Suspense> */}
           

            <Route exact path="/" render={() => (
                <Redirect to="/dashboard"/>
            )}/>
            <ToastContainer/>
        </Fragment>
    )
    
};

export default AppMain;