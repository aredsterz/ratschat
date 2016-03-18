CREATE TABLE IF NOT EXISTS `rats_user` (
  `uid` int(12) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `firstname` varchar(120) DEFAULT NULL,
  `lastname` varchar(120) DEFAULT NULL,
  `pwd_salt` varchar(12) DEFAULT NULL,
  `pwd_enc` varchar(256) DEFAULT NULL,
  `pwd_last_update` datetime DEFAULT NULL,
  `user_level` varchar(1) DEFAULT NULL COMMENT '1: admin 2: user',
  `status` varchar(1) DEFAULT NULL COMMENT '1: active 9:not active',
  `last_login` datetime DEFAULT NULL,
  `register_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;