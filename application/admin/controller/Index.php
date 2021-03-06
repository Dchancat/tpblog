<?php

namespace app\admin\controller;

use think\Controller;
use \app\common\model\Admin;
use think\Db;

class Index extends Controller
{
    // 验证失败是否抛出异常
    protected $failException = true;
    
    public function initialize()
    {
	if(session('?admin.id')){
	    $this->redirect('admin/home/index');
	}
    }

    //后台登录
    public function login()
    {
	if (request()->isAjax()){
#	    $username = input('post.username');
#	    $password = input('post.password');
	    $data = [
		'username' => trim(input('post.username')),
		'password' => trim(input('post.password')),
	    ];
	    $result = model('Admin')->login($data);
	   if($result ==1 ){
		$this->success('登录成功!','admin/home/index');
 #               # $this->success($msg='登陆成功!',$url='admin/home/index');
           }else {
                $this->error($result);
           }
	}
	return view();
    }


    //注册
    public function register()
    {
	if (request()->isAjax()){
	    $data = [
		'username' => input('post.username'),
		'password' => input('post.password'),
		'conpass'  => input('post.conpass'),
		'nickname' => input('post.nickname'),
		'email'    => input('post.email')
	    ];
	    
	    $result = model('Admin')->register($data);		
	  #  $res = new Admin();//@2
           # $result = $result->register($data);//@3
	    if ($result == 1) {
		$this->success('注册成功你的账户是：'.$data['username'],'admin/index/login');
	    }else {
		$this->error($result);
	    }

	}
	return view();
    }
	
    //忘记密码
    public function forgot()
    {
	if (request()->isAjax()){
	    $captcha = mt_rand(100000,999900);
	    session('captcha',$captcha);
	    $data = [
	    	'email' => input('post.email'),
	    ];
	    #$result = model('Admin')->forgot($data);		
	    $res = new Admin;
	    $result = $res->forgot($data);
	    $send = mailto(input('post.email'), '重置密码验证码','你的重置密码验证码是：'.$captcha);
	    if ($result==1 && !isempty($send) ) {
		$this->success('验证码发送成功');
	    }else {
	   	$this->error('验证码发送失败');
	    }
	}
	return view();
    }

    public function reset()
    {
	$data = [
	    'captcha' => input('post.captcha'),
	    'email'   => input('post.email'),   
	];
 	$validate = new \app\common\validate\Admin;
        if (!$validate->scene('reset')->check($data)){
	    return $validate->getError();
        }  
	$result = model('Admin')->reset($data);
	if ($result == 1 ){
	    $this->success('密码重置成功请往邮箱查看新密码','admin/index/login');
	}else {
	    $this->error($result);
	}
    }
}
