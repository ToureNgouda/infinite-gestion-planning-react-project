import React, {Fragment,Component} from 'react';

import PageTitle from '../../../Layout/AppMain/PageTitle';

// Examples
import ModalsExample from './Examples';

export default class ModalsExamples extends Component {

    render() {
        return (
            <Fragment>
                <PageTitle
                    heading="Modals"
                    subheading="Wide selection of modal dialogs styles and animations available."
                    icon="pe-7s-phone icon-gradient bg-premium-dark"
                />
                <ModalsExample/>
            </Fragment>
        );
    }
}