import React, { useState } from 'react';
import './ResponsiveTable.css'; // Assuming the CSS file is in the same directory
import { MdOutlineModeEditOutline, MdDelete } from 'react-icons/md';

const ResponsiveTable = () => {
  const [data, setData] = useState([]);
  const [inputId, setInputId] = useState('');
  const [inputName, setInputName] = useState('');
  const [selectedRowId, setSelectedRowId] = useState(null);

  const addRow = () => {
    if (inputId.trim() !== '' && inputName.trim() !== '') {
      const newRow = {
        id: inputId.trim(),
        name: inputName.trim(),
      };

      setData([...data, newRow]);
      setInputId('');
      setInputName('');
    }
  };

  const deleteRow = (id) => {
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
    setSelectedRowId(null);
  };

  const editRow = (id) => {
    const selectedRow = data.find((row) => row.id === id);
    if (selectedRow) {
      setInputId(selectedRow.id);
      setInputName(selectedRow.name);
      setSelectedRowId(selectedRow.id);
    }
  };

  const updateRow = () => {
    if (inputId.trim() !== '' && inputName.trim() !== '') {
      const updatedData = data.map((row) => {
        if (row.id === selectedRowId) {
          return {
            id: inputId.trim(),
            name: inputName.trim(),
          };
        }
        return row;
      });

      setData(updatedData);
      setInputId('');
      setInputName('');
      setSelectedRowId(null);
    }
  };

  const handleIdChange = (e) => {
    setInputId(e.target.value);
  };

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };

  return (
    <div>
      <div className="input-container">
      <h5 className='text-center'>My Crop Production</h5>
        <input
          type="text"
          value={inputId}
          onChange={handleIdChange}
          placeholder="Enter Weight"
        />
        <input
          type="text"
          value={inputName}
          onChange={handleNameChange}
          placeholder="Enter Crop"
        />
        {selectedRowId ? (
          <button onClick={updateRow}>Update</button>
        ) : (
          <button onClick={addRow}>Add Row</button>
        )}
       
      </div>
      <div className="table-container">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>WEIGHT</th>
              <th>CROP</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>
                  <button onClick={() => editRow(row.id)} className='p-2'><MdOutlineModeEditOutline/></button>
                  <button onClick={() => deleteRow(row.id)}><MdDelete/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResponsiveTable;
