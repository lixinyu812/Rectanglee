$(()=>{
     let $width = $('#width'),
         $height = $('#height'),
      $btnCal = $('#calc'),
      $perimeter = $('#perimeter'),
      $area = $('#area'),
      $widthValidate = $('#width-validate'),
      $heightValidate = $('#height-validate');

$width.keypress((e)=>{
    let key = e.key,
          val = e.target.value,
      pos = e.target.selectionStart;
  val = val.slice(0,pos) + key + val.slice(pos,val.length);
  console.log(val);
  if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(val))
  e.preventDefault();
  if(val.indexOf('e') !== -1) e.preventDefault();
});
$height.keypress((e)=>{
   let key = e.key,
    val = e.target.value,
  pos = e.target.selectionStart;
  val = val.slice(0,pos)+key+val.slice(pos,val.length);
  console.log(val);
  if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(val))
  e.preventDefault();
if(val.indexOf('e') !== -1) e.preventDefault();
}
  );

$width.focusout(()=>{
  if(!validate($width,$widthValidate)){
    $width.select();
  }
});
$height.focusout(()=>{
  if(!validate($height,$heightValidate)){
    $height.select();
  }
  
});

$btnCal.click(()=>{
    let w = Number($width.val()),
      h = Number($height.val());
function roundFractional(x,n){
  return Math.round(x*Math.pow(10,n))/Math.pow(10,n);
}
if(validate($width,$widthValidate) && validate($height,$heightValidate)){
  let p = roundFractional(w+w+h+h,2),
      a = roundFractional(w*h,2);
  $perimeter.val(p);
  $area.val(a);
}


});

});

function validate(input,output){
  if(input.val()===''){
    output.html('该字段不能为空');
    return false;
  }else{
    output.html('');
  }

  let val = Number(input.val());
  if(isNaN(val)){
     output.html('该字段应为数值');
      return false;
  }else{
    output.html('');
  }
  if(val < 0){
    output.html('该数值不能小于零');
      return false;
  }else{
    output.html('');
  }
  return true;
}


