import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    return (_.sum(data)/data.length).toFixed(2);
}

export default (props) => {
    return (
        <div>
            <Sparklines data={props.data} height={120} width={150}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <span>
                Average: {average(props.data)} {props.units}
            </span>
        </div>
    )
}