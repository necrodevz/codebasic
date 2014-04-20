<table style="width:300px">

<?php foreach ($order_details as $order_detail): ?>
<tr>
  <td><?php echo $order_detail[ 'Customer' ][ 'first_name' ]; ?></td>
  <td><?php echo $order_detail[ 'Customer' ][ 'last_name' ]; ?></td>
  <td><?php echo $order_detail[ 'Product' ][ 'name' ]; ?></td>
  <td><?php echo $order_detail[ 'Product' ][ 'price' ]; ?></td>
</tr>
<?php endforeach; ?>
</table>