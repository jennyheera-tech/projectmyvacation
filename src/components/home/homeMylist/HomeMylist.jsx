import HomeMyItem from './homeMyItem';
import './style.css';

const HomeMylist = ({ data,onDel }) => {
    return (
        <ul className="list">
            {data.map((item) => (
                <HomeMyItem key={item.id} item={item} onDel={onDel} />
            ))}
        </ul>
    );
};

export default HomeMylist;
