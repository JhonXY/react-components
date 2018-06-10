// import React from 'react'
// import React = require('react')
import * as React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import omit from 'omit.js'


export type ButtonType = 'default' | 'primary' | 'warning' | 'danger';
export type ButtonSize = 'small' | 'default' | 'large';

// 基本的props接口
export interface BaseButtonProps {
  type?: ButtonType; // 按钮样式
  htmlType?: string; // button原生的type值 
  icon?: string; // 添加图标
  size?: ButtonSize; // 按钮大小
  loading?: boolean | { delay?: number }; // loading状态
  className?: string; // 自定义样式的添加
}

// 当传入target属性时会成为a便签,基础属性会变更
export type AnchorButtonProps  = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> 
export type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
export type ButtonProps = AnchorButtonProps | NativeButtonProps

export default class Button extends React.Component<ButtonProps, any>{
  static propTypes = {
    type: PropTypes.string,
    size: PropTypes.oneOf(['large', 'default', 'small']),
    htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
    onClick: PropTypes.func,
    loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    className: PropTypes.string,
    icon: PropTypes.string,
  }
  timeout: number;
  delayTimeout: number;

  constructor(props: ButtonProps){
    super(props)
    this.state = {
      loading: props.loading,
      clicked: false
    }
  }

  // props改变时
  componentWillReceiveProps(nextProps: ButtonProps) {
    const currentLoading = this.props.loading;
    const loading = nextProps.loading;
    if (currentLoading) {
      clearTimeout(this.delayTimeout);
    }
    // 传入loading表示对象
    if (typeof loading !== 'boolean' && loading && loading.delay) {
      this.delayTimeout = window.setTimeout(() => this.setState({ loading }), loading.delay);
    } else {
      // 普通的loading状态改变
      this.setState({ loading });
    }
  }

  componentDidUpdate() {

  }

  // 组件卸载时
  componentWillUnmount() {
    if(this.timeout) {
      clearTimeout(this.timeout)
    }
    if(this.delayTimeout) {
      clearTimeout(this.delayTimeout)
    }
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    this.setState({ clicked: true })
    clearTimeout(this.timeout)
    this.timeout = window.setTimeout(() => this.setState({ clicked: false}), 500)

    const onClick = this.props.onClick
    if(onClick){
      // 将onClick转化为event类型，无返回值
      (onClick as (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void)(e)
    }
  }

  render() {
    // others会在传入href和target是获取
    // others = { href: '', target: ''}
    const {
      type, size, className, htmlType, children, icon, ...others
    } = this.props;
    const { 
      loading, clicked
    } = this.state

    // 按钮大小初始化
    let sizeCls = '';
    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;
      case 'small':
        sizeCls = 'sm';
      default:
        break;
    }

    const ComponentProp = (others as AnchorButtonProps).href ? 'a' : 'button';
    const classes = classNames(className, {
      [`${type}`]: type,
      [`loading`]: loading,
      [`clicked`]: clicked,
      [`${sizeCls}`]: sizeCls,
    })

    return (
      <ComponentProp
        {...omit()}
      >
      </ComponentProp>
    )
  }
}
