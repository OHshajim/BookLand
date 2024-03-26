import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { getStoredReadBook } from '../Utility/LocalStorage';
import { useEffect, useState } from 'react';
// eslint-disable-next-line react-hooks/rules-of-hooks
// const books = useLoaderData()
// for read

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data1 = [

    {
        name: 'Page E',
        uv: 3000,

    },
    {
        name: 'Page F',
        uv: 1090,

    },
    {
        name: 'Page G',
        uv: 90,
    },
];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const ReadChart = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('../../../../public/Books.JSON')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const storedReadBooks = getStoredReadBook()
    const displayReadBook = data.filter(book => storedReadBooks.includes(book.bookId))
    return (
        <div>
            <BarChart
                width={1500}
                height={600}
                data={displayReadBook}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {displayReadBook.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default ReadChart;