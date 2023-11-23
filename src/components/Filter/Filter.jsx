

export function Filter() {
    
    return (
      <label>
        Car brand
        <select
          id="size"
          name="size"
          defaultValue="start"
        >
          <option value="start" hidden>
            Enter the text
          </option>
          <option value="xs">Extra Small</option>
          <option value="s">Small</option>
          <option value="m">Medium</option>
          <option value="l">Large</option>
        </select>
      </label>
    );
}