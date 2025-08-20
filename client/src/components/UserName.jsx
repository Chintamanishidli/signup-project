function UserName({ value, setValue, error }) {
  return (
    <div className="mb-3">
      <input
        type="text"
        placeholder="Enter Username"
        className="form-control"
        value={value}
        autoComplete="username"
        onChange={(e) => setValue(e.target.value)}
      />
      {error && <small className="text-danger">{error}</small>}
    </div>
  );
}
export default UserName;
