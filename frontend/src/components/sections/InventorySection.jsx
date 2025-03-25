import React from "react";

const InventorySection = ({ inventory, setInventory }) => {
  const updateItem = (index, field, value) => {
    const updated = [...inventory];
    updated[index][field] = field === "quantity" ? parseInt(value, 10) : value;
    setInventory(updated);
  };

  const addItem = () => {
    setInventory([...inventory, { name: "New Item", quantity: 1 }]);
  };

  const removeItem = (index) => {
    const updated = inventory.filter((_, i) => i !== index);
    setInventory(updated);
  };

  return (
    <div>
      <h3>Inventory</h3>
      <ul>
        {inventory.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              value={item.name}
              onChange={(e) => updateItem(index, "name", e.target.value)}
              placeholder="Item Name"
              style={{ marginRight: "10px" }}
            />
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateItem(index, "quantity", e.target.value)}
              placeholder="Qty"
              style={{ width: "60px", marginRight: "10px" }}
            />
            <button onClick={() => removeItem(index)}>❌</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>+ Add Item</button>
    </div>
  );
};

export default InventorySection;
