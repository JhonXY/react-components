// import React from 'react'
// import React = require('react')
import * as React from 'react';


export type ButtonType = 'default' | 'primary' | 'warning' | 'danger';
export type ButtonSize = 'small' | 'default' | 'large';

// 基本的props接口
export interface BaseButtonProps {
  type?: ButtonType;
  htmlType?: string;
  icon?: string;
  size?: ButtonSize;
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  className?: string;
  ghost?: boolean;
}

export type ButtonProps = BaseButtonProps
export default class Button 
extends React.Component<ButtonProps, any>{
  constructor(props: ButtonProps){
    super(props)
    this.state = {
      loading: props.loading
    }
  }
}
