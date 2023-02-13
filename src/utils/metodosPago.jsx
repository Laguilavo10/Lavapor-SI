<div>
<p>Metodo De Pago</p>
<div>
  {metodosDePago.map((metodo) => (
    <label>
      <input type="radio" name="metodoPago" value={metodo} required />
      {SVG[`${metodo}`]}
    </label>
  ))}
</div>

</div>