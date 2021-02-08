import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';



class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };
    }
/*     async componentDidMount() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        console.log(campaigns);
    } */

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`}>
                        <a>View Campaign</a>
                    </Link>
                ),
                fluid: true
            };
        });

        return <Card.Group items={items} />;

    }
    render() {
        //return <div>{this.props.campaigns[0]}</div>
        //return <div>See this.</div>
        return (
        <Layout>
            <div>

                <h3>Open Campaigns</h3>
                
                <Link route="/campaigns/new">
                    <a>
                        <Button floated="right"
                            content="Create Campaign"
                            icon="add circle"
                            primary
                        />
                    </a>
                </Link>

                {this.renderCampaigns()}
            </div>
        </Layout>
        );
    }
}

export default CampaignIndex;

/* export default () => {
    return <h1> This is the campaign list page!!!</h1>
}
 */
