function Email({ value, setValue, error }) {
  return (
    <div className="mb-3">
      <input
        type="email"
        placeholder="Enter Email"
        className="form-control"
        value={value}
        autoComplete="email"
        onChange={(e) => setValue(e.target.value)}
      />
      
      {error && <small className="text-danger">{error}</small>}
    </div>
  );
}
export default Email;
