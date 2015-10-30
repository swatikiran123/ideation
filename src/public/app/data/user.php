<?php
	
	$user=json_decode(file_get_contents('php://input'));

	if($user->loginId=='svema' && $user->password='1234')
		print 'success';
	else
		print 'error';

?>