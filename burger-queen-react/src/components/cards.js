import React from 'react';
import {Button, CardDeck} from 'react-bootstrap'
import {CardModel} from './card';
import {Select} from './select';

import ApolloClient, { gql } from 'apollo-boost';
import {ApolloProvider, useQuery} from '@apollo/react-hooks';;

const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
});

const jobsQuery = gql`
  {
	jobs{
      title
      createdAt
      postedAt
      locationNames
      userEmail
      company{
        name
        websiteUrl
      }
      applyUrl
      }
  }
`;

const Jobs = () => {
  const { loading, error, data } = useQuery(jobsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.jobs.map((job, currency) => (
    <CardModel key={currency} id={currency} job={job.title} locationNames={job.locationNames}  postedAt={job.postedAt}></CardModel>
  ));
}


export class Cards extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: parseInt(this.props.id),
            element: []
        }
    }

    addCard () {
        this.setState((stateBack)=>{
            const newId = stateBack.id +1;
            const newElement = stateBack.element;
            return{ 
                id: newId,
                element: newElement.concat(<CardModel key={newId} id={newId}></CardModel>)}
        })
    }

    render(){
        return(
            <div>
                <Select list={['Filtrar','Pais','compañia', 'puesto laboral']}></Select>
                <ApolloProvider client={client}>
                    <div>
                    <h2>My first Apollo app 🚀</h2>
                    <CardDeck><Jobs></Jobs></CardDeck>
                    </div>
                </ApolloProvider>
                {/* <CardDeck>{this.state.element}</CardDeck>
                <Button variant="info" onClick={()=>this.addCard()}>Agregar</Button> */}
            </div>
        )
    }
}