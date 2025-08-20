function ConfirmPassword({ value, setValue, error }) {
  return (
    <div className="mb-3">
      <input
        type="password"
        placeholder="Confirm Password"
        className="form-control"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoComplete="new-password"   // ✅ add this
      />
      {error && <small className="text-danger">{error}</small>}
    </div>
  );
}
export default ConfirmPassword;
