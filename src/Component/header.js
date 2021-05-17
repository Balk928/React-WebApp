import React from 'react';
import {Header,Card,CardBody} from 'reactstrap';
class header extends React.Component
{
render()

{
    return(
        <div>
            <Card className =  "my-2 bg-warning">
                <CardBody>
                    <h1 class = 'text-center my-1'>WelCome To Our Application</h1>
                </CardBody>
                </Card>
            </div>
    )
}
}
export default header;