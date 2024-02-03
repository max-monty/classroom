import React from 'react';

function GroupSelector({ groupSize, setGroupSize, generateGroups }) {
    return (
        <div>
            <label>
                Group Size:
                <select value={groupSize} onChange={(e) => setGroupSize(Number(e.target.value))}>
                    {[2, 3, 4, 5].map((size) => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>
            </label>
            <button onClick={generateGroups}>Generate Groups</button>
        </div>
    );
}

export default GroupSelector;