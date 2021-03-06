<?php

namespace app\common\validate;

use think\Validate;

class Admin extends Validate
{
    protected $rule = [
	'username|用户名' => 'require|max:25|alphaDash',
	'password|密码'   => 'require|min:6|max:16',
	'conpass|确认密码'=> 'require|confirm:password',
	'oldpwd|原密码'   => 'require',
	'newpwd|新密码'   => 'require',
	'nickname|昵称'   => 'require|max:25|alphaDash',
	'email|邮箱'      => 'require|email|unique:admin',
	'captcha|验证码'  => 'require'
    ];

    public function sceneLogin()
    {
	return $this->only(['username','password']);
    }

    public function sceneRegister()
    {
	return $this->only(['username','password','conpass','nickname','email'])->append('username','unique:admin');

    }

    public function sceneReset()
    {
	return $this->only(['captcha']);
    }
   
    public function sceneAdd()
    {
        return $this->only(['username','password','conpass','nickname','email'])->append('username','unique:admin');
    }
    
     public function sceneEdit()
    {
        return $this->only(['oldpwd','newpwd','nickname','email']);
    }


}
