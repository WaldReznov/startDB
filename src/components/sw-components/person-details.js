import React from 'react';

import ItemDetails, {Record} from '../item-details/item-details';

import {SwapiServiceConsumer} from '../swapi-service-context';

import {withSwapiService} from '../hoc-helpers';


const PersonDetails = ({itemId, swapiService}) => {
    const {getPersonImage, getPerson} = swapiService;
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage} >

            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />

        </ItemDetails>
    )
}

export default withSwapiService(PersonDetails);