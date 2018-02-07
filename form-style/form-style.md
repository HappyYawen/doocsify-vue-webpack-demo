### 表单

!> <span class="text-theme">表单标题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标准输入框200*22</span>

<!-- <iframe src="../form-style/form-style.html" width="100%" style="border:none;height:1750px"></iframe> -->
<div class="inline-mark">
  <span class="part1">160px</span>
  <span class="part2">20</span>
  <span class="part3">380px</span>
  <span class="part4">20</span>
  <span class="part5">400px</span>
</div>
<form class="form-inline">
  <div class="ihr-form-item">
   <label class="ihr-label mr-20">标准字段</label>
   <input type="text" class="ihr-input" placeholder="请输入文字">
  </div>
  <div class="ihr-form-item">
   <label class="ihr-label-required ml-20">必填字段<span>*</span></label>
   <input type="text" class="ihr-input untext" placeholder="请输入关键字">
   <span class="glyphicons glyphicons-search"></span>
  </div>
  <div class="ihr-form-item">
   <label class="ihr-label mr-20">日期选择</label>
   <input type="text" class="ihr-input untext" placeholder="年/月/日">
   <span class="glyphicons glyphicons-calendar"></span>
  </div>

  <div class="ihr-form-item ml-22">
    <label class="ihr-label-required ml-20">时间段选择<span>*</span></label>
    <input type="text" class="ihr-input-small untext">
    <span class="glyphicons glyphicons-calendar"></span>
  </div>
  <div class="ihr-form-item">
    <label class="ihr-label-small ml-22">至</label>
    <input type="text" class="ihr-input-small untext">
    <span class="glyphicons glyphicons-calendar"></span>
  </div>

  <div class="ihr-form-item">
    <label class="ihr-label mr-20">下拉选择</label>
    <select class="ihr-input" placeholder="请选择"></select>
  </div>

  <div class="ihr-form-item">
    <label class="ihr-label-required ml-20">等级字段选择<span>*</span></label>
    <input type="text" class="ihr-input-small">
  </div>

  <div class="ihr-form-item">
    <label class="ihr-label-small">至</label>
    <input type="text" class="ihr-input-small">
  </div>

  <div class="ihr-form-item">
   <label class="ihr-label mr-20">输入百分比</label>
   <input type="text" class="ihr-input untext">
   <span class="text">%</span>
  </div>

  <div class="ihr-form-item ml-22">
    <label class="ihr-label-required ml-20">等级数字选择<span>*</span></label>
    <input type="text" class="ihr-input-small">
  </div>

  <div class="ihr-form-item">
    <label class="ihr-label-small">-</label>
    <input type="text" class="ihr-input-small">
  </div>

  <div class="ihr-form-item">
    <label class="ihr-label mr-20">省市区选择</label>
    <input type="text" class="ihr-input untext" placeholder="省份名称/拼音">
    <span class="text">省</span>
  </div>

  <div class="ihr-form-item ml-20">
    <input type="text" class="ihr-input-158 untext ml-12" placeholder="城市名称/拼音">
    <span class="text">市</span>
  </div>

  <div class="ihr-form-item ml-20">
    <input type="text" class="ihr-input-160 untext ml-12" placeholder="县区名称/拼音">
    <span class="text text-40">县区</span>
  </div>
  <hr class="ihr-hr">
  <div class="ihr-form-item ihr-width-full">
    <label class="ihr-label mr-20">长文本</label>
    <textarea class="ihr-textarea" placeholder="请输入文字"></textarea>
  </div>
  <div class="ihr-form-item ihr-width-full">
    <label class="ihr-label mr-20">多选</label>
    <div>
      <div class='ihr-checkbox'>
        <input type='checkbox' id='checkbox1' name='checkboxs'>
        <label for='checkbox1'>多选项1</label>
      </div>
      <div class='ihr-checkbox'>
        <input type='checkbox' id='checkbox2' name='checkboxs'>
        <label for='checkbox2'>多选项2</label>
      </div>
      <div class='ihr-checkbox'>
        <input type='checkbox' id='checkbox3' name='checkboxs' checked disabled>
        <label for='checkbox3' class="disabled">多选项3</label>
      </div>
    </div>
  </div>
  <div class="ihr-form-item ihr-width-full">
    <label class="ihr-label mr-20">单选</label>
    <div>
      <div class='ihr-radio'>
        <input type='radio' id='radio1' name='radios'>
        <label for='radio1'>多选项1</label>
      </div>
      <div class='ihr-radio'>
        <input type='radio' id='radio2' name='radios'>
        <label for='radio2'>多选项2</label>
      </div>
    </div>
  </div>
  <div class="ihr-form-item mt-10">
    <label class="ihr-label mr-20">禁用文本框</label>
    <input type="text" class="ihr-input" placeholder="请输入文字" disabled>
  </div>

  <div class="ihr-form-item mt-10 ml-22">
    <label class="ihr-label mr-20">密码输入框</label>
    <input type="password" class="ihr-input" placeholder="请输入密码">
  </div>

  <div class="ihr-form-item ihr-width-full">
    <label class="ihr-label mr-20">是否开启</label>
    <div>
      <label class="ihr-switch">
        <input type="checkbox">
          <i></i>
      </label>
    </div>
  </div>
</form>


```html
<form class="form-inline">
  <div class="ihr-form-item">
   <label class="ihr-label mr-20">标准字段</label>
   <input type="text" class="ihr-input" placeholder="请输入文字">
  </div>
  <div class="ihr-form-item">
   <label class="ihr-label-required ml-20">必填字段<span>*</span></label>
   <input type="text" class="ihr-input untext" placeholder="请输入关键字">
   <span class="glyphicons glyphicons-search"></span>
  </div>
  <div class="ihr-form-item">
   <label class="ihr-label mr-20">日期选择</label>
   <input type="text" class="ihr-input untext" placeholder="年/月/日">
   <span class="glyphicons glyphicons-calendar"></span>
  </div>
  <div class="ihr-form-item ml-22">
    <label class="ihr-label-required ml-20">时间段选择<span>*</span></label>
    <input type="text" class="ihr-input-small untext">
    <span class="glyphicons glyphicons-calendar"></span>
  </div>
  <div class="ihr-form-item">
    <label class="ihr-label-small ml-22">至</label>
    <input type="text" class="ihr-input-small untext">
    <span class="glyphicons glyphicons-calendar"></span>
  </div>
  <div class="ihr-form-item">
    <label class="ihr-label mr-20">下拉选择</label>
    <select class="ihr-input" placeholder="请选择"></select>
  </div>
  <div class="ihr-form-item">
    <label class="ihr-label-required ml-20">等级字段选择<span>*</span></label>
    <input type="text" class="ihr-input-small">
  </div>
  <div class="ihr-form-item">
    <label class="ihr-label-small">至</label>
    <input type="text" class="ihr-input-small">
  </div>
  <div class="ihr-form-item">
   <label class="ihr-label mr-20">输入百分比</label>
   <input type="text" class="ihr-input untext">
   <span class="text">%</span>
  </div>
  <div class="ihr-form-item ml-22">
    <label class="ihr-label-required ml-20">等级数字选择<span>*</span></label>
    <input type="text" class="ihr-input-small">
  </div>
  <div class="ihr-form-item">
    <label class="ihr-label-small">-</label>
    <input type="text" class="ihr-input-small">
  </div>
  <div class="ihr-form-item">
    <label class="ihr-label mr-20">省市区选择</label>
    <input type="text" class="ihr-input untext" placeholder="省份名称/拼音">
    <span class="text">省</span>
  </div>
  <div class="ihr-form-item ml-20">
    <input type="text" class="ihr-input-158 untext ml-12" placeholder="城市名称/拼音">
    <span class="text">市</span>
  </div>
  <div class="ihr-form-item ml-20">
    <input type="text" class="ihr-input-160 untext ml-12" placeholder="县区名称/拼音">
    <span class="text text-40">县区</span>
  </div>
  <hr class="ihr-hr">
  <div class="ihr-form-item ihr-width-full">
    <label class="ihr-label mr-20">长文本</label>
    <textarea class="ihr-textarea" placeholder="请输入文字"></textarea>
  </div>
  <div class="ihr-form-item ihr-width-full">
    <label class="ihr-label mr-20">多选</label>
    <div>
      <div class='ihr-checkbox'>
        <input type='checkbox' id='checkbox1' name='checkboxs'>
        <label for='checkbox1'>多选项1</label>
      </div>
      <div class='ihr-checkbox'>
        <input type='checkbox' id='checkbox2' name='checkboxs'>
        <label for='checkbox2'>多选项2</label>
      </div>
      <div class='ihr-checkbox'>
        <input type='checkbox' id='checkbox3' name='checkboxs' checked disabled>
        <label for='checkbox3' class="disabled">多选项3</label>
      </div>
    </div>
  </div>
  <div class="ihr-form-item ihr-width-full">
    <label class="ihr-label mr-20">单选</label>
    <div>
      <div class='ihr-radio'>
        <input type='radio' id='radio1' name='radios'>
        <label for='radio1'>多选项1</label>
      </div>
      <div class='ihr-radio'>
        <input type='radio' id='radio2' name='radios'>
        <label for='radio2'>多选项2</label>
      </div>
    </div>
  </div>
  <div class="ihr-form-item mt-10">
    <label class="ihr-label mr-20">禁用文本框</label>
    <input type="text" class="ihr-input" placeholder="请输入文字" disabled>
  </div>
  <div class="ihr-form-item mt-10 ml-22">
    <label class="ihr-label mr-20">密码输入框</label>
    <input type="password" class="ihr-input" placeholder="请输入密码">
  </div>
  <div class="ihr-form-item ihr-width-full">
    <label class="ihr-label mr-20">是否开启</label>
    <div>
      <label class="ihr-switch">
        <input type="checkbox">
          <i></i>
      </label>
    </div>
  </div>
</form>
```