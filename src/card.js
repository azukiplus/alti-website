import { Card } from 'react-bootstrap';

function ImageCard(props) {
    return (
        <span className="m-1 w-auto">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.cardSrc} />
                <Card.Body>
                    <Card.Title>{props.cardTitle}</Card.Title>
                    <Card.Text>
                        <div>
                            Azure caption: {props.cardTextAzure}
                        </div>
                        <div className="pt-2">
                            GPT caption: {props.cardTextGPT}
                        </div>
                        {props.cardTextActual && <div className="pt-2">Actual: {props.cardTextActual}</div>}
                    </Card.Text>
                </Card.Body>
            </Card>
        </span>
    );
}

export default ImageCard;