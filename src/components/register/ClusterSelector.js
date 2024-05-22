import React, { useState } from 'react';

const clusters = [
    'Кино', 'Театр', 'Музыка', 'Фотография',
    'Арт', 'Диджитал дизайн', 'Фешн', 'Танец',
    'Бьюти', 'Креатив', 'Продюссирование', 'Текст'
];

const ClusterSelector = () => {
    const [selectedClusters, setSelectedClusters] = useState([]);

    const toggleCluster = (cluster) => {
        if (selectedClusters.includes(cluster)) {
            setSelectedClusters(selectedClusters.filter(item => item !== cluster));
        } else {
            if (selectedClusters.length < 3) {
                setSelectedClusters([...selectedClusters, cluster]);
            }
        }
    };

    return (
        <div>
            <h2>КЛАСТЕРЫ</h2>
            <p>Сообщества творцов, в которых они делятся своими работами, общаются, а также совместно участвуют в челленджах.<br />
                Вы можете выбрать до 3 кластеров.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {clusters.map((cluster, index) => (
                    <button
                        key={index}
                        onClick={() => toggleCluster(cluster)}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: selectedClusters.includes(cluster) ? 'red' : '#e6e1d5',
                            color: selectedClusters.includes(cluster) ? 'white' : 'black',
                            border: '1px solid black',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        {cluster}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ClusterSelector;
