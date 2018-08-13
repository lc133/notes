<!DOCTYPE HTML>
<html>
<head>
  <title>Example</title>
  <meta charset="utf-8"/>
  <style></style>
 <script src="jquery.min.js"></script>
</head>
<body>
  <table id="process" cellpadding="2" cellspacing="0" border="1">
    <thead>
      <tr >
        <td>col0</td>
        <td>col1</td>
        <td>col2</td>
        <td>col3</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>SuZhou</td>
        <td>11111</td>
        <td>22222</td>
        <td>SuZhouCity</td>
      </tr>
      <tr>
        <td>SuZhou</td>
        <td>33333</td>
        <td>44444</td>
        <td>SuZhouCity</td>
      </tr>
      <tr>
        <td>SuZhou</td>
        <td>55555</td>
        <td>66666</td>
        <td>SuZhouCity</td>
      </tr>
      <tr>
        <td>ShangHai</td>
        <td>77777</td>
        <td>88888</td>
        <td>ShangHaiCity</td>
      </tr>
      <tr>
        <td>ShangHai</td>
        <td>uuuuu</td>
        <td>hhhhh</td>
        <td>ShangHaiCity</td>
      </tr>
      <tr>
        <td>ShangHai</td>
        <td>ggggg</td>
        <td>ccccc</td>
        <td>ShangHaiCity</td>
      </tr>
      <tr>
        <td>GuangZhou</td>
        <td>ttttt</td>
        <td>eeeee</td>
        <td>GuangZhouCity</td>
      </tr>
      <tr>
        <td>GuangZhou</td>
        <td>ppppp</td>
        <td>qqqqq</td>
        <td>GuangZhouCity</td>
      </tr>
    </tbody>
  </table>
 
  <script type="text/javascript">
    //函数说明：合并指定表格（表格id为table_id）指定行（行数为table_rownum）的相同文本的相邻单元格
//参数说明：table_id 为需要进行合并单元格的表格id。如在HTMl中指定表格 id="data" ，此参数应为 #data 
//参数说明：table_rownum 为需要合并单元格的所在行。其参数形式请参考jQuery中nth-child的参数。
//     如果为数字，则从最左边第一行为1开始算起。
//     "even" 表示偶数行
//     "odd" 表示奇数行
//     "3n+1" 表示的行数为1、4、7、10.......
//参数说明：table_maxcolnum 为指定行中单元格对应的最大列数，列数大于这个数值的单元格将不进行比较合并。
//     此参数可以为空，为空则指定行的所有单元格要进行比较合并。
function table_colspan(table_id,table_rownum,table_maxcolnum){
  if(table_maxcolnum == void 0){table_maxcolnum=0;}
  table_firsttd = "";
  table_currenttd = "";
  table_SpanNum = 0;
  $(table_id + " tr:nth-child(" + table_rownum + ")").each(function(i){
    table_Obj = $(this).children();
    table_Obj.each(function(i){
      if(i==0){
        table_firsttd = $(this);
        table_SpanNum = 1;
      }else if((table_maxcolnum>0)&&(i>table_maxcolnum)){
        return "";
      }else{
        table_currenttd = $(this);
        if(table_firsttd.text()==table_currenttd.text()){
          table_SpanNum++;
          table_currenttd.hide(); //remove();
          table_firsttd.attr("colSpan",table_SpanNum);
        }else{
          table_firsttd = $(this);
          table_SpanNum = 1;
        }
      }
    });
  });
}
//函数说明：合并指定表格（表格id为table_id）指定列（列数为table_colnum）的相同文本的相邻单元格
//参数说明：table_id 为需要进行合并单元格的表格的id。如在HTMl中指定表格 id="data" ，此参数应为 #data 
//参数说明：table_colnum 为需要合并单元格的所在列。为数字，从最左边第一列为1开始算起。
function table_rowspan(table_id,table_colnum){
  table_firsttd = "";
  table_currenttd = "";
  table_SpanNum = 0;
  table_Obj = $(table_id + " tr td:nth-child(" + table_colnum + ")");
  table_Obj.each(function(i){
    if(i==0){
      table_firsttd = $(this);
      table_SpanNum = 1;
    }else{
      table_currenttd = $(this);
      if(table_firsttd.text()==table_currenttd.text()){
        table_SpanNum++;
        table_currenttd.hide(); //remove();
        table_firsttd.attr("rowSpan",table_SpanNum);
      }else{
        table_firsttd = $(this);
        table_SpanNum = 1;
      }
    }
  }); 
}

$(document).ready(function(){ 
 // table_rowspan("#process",4);
 // table_rowspan("#process",3);
 // table_rowspan("#process",2);
 // table_rowspan("#process",1);
 });
  </script>
</body>
</html>