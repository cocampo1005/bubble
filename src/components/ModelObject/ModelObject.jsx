import './ModelObject.scss';

function ModelObject({ model }) {
    const { creator, name, src } = model;

    return (
        <div className='object'>
            <div className="object__container">
                <iframe src={src}></iframe>
            </div>
            <p className='object__info'>
                <span className='object__info-name'>{name}</span>
            </p>
            <p>
                by <span className='object__info-creator'>{creator}</span>
            </p>
        </div>
    )
}

export default ModelObject;