import { useState } from 'react';
import { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation } from './rtk';

function App() {
  const [count, setCount] = useState('');
  const [newProduct, setNewProduct] = useState('');
  const {data = [], isLoading} = useGetTodosQuery(count);
  const [addProduct, {isError}] = useAddTodoMutation();
  const [deleteProduct] = useDeleteTodoMutation();

  const handleAddProduct = async () => {
    if(newProduct) {
      await addProduct({value: newProduct}).unwrap();
      setNewProduct('');
    }
  }

  const handleDeleteProduct = async (id: number) => {
    await deleteProduct(id).unwrap();
  }

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <div>
        <input
          type="text"
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
        />
        <button onClick={handleAddProduct}>Add product</button>
      </div>
      <div>
        <select value={count} onChange={(e) => setCount(e.target.value)}>
          <option value="">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <ul>
        {data.map(item => (
          <li key={item.id} onClick={() => handleDeleteProduct(Number(item.id))}>
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;