export interface WeatherBitImageProps {
    icon: string;
    description: string;
};

const WeatherBitImage: React.FC<WeatherBitImageProps> = (props) => {
    
    return (
    <div>
        <img alt={props.description} src={`https://www.weatherbit.io/static/img/icons/${props.icon}.png`} />
    </div>);
}

export default WeatherBitImage;