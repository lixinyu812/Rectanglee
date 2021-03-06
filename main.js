$(()=>{
   let $width = $('#width'),
       $height = $('#height'),
      $btnCal = $('#calc'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
$btnCal.click(()=>{
   let w = Number($width.val()),
      h = Number($height.val());
function roundFractional(x,n){
  return Math.round(x*Math.pow(10,n))/Math.pow(10,n);
}

let p = roundFractional(w+w+h+h,2),
   a = roundFractional(w*h,2);
  $perimeter.val(p);
  $area.val(a);
});
});
