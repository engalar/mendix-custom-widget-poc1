import { createElement } from "react";
import { Store } from "../store";
import { ArrowDownOutlined, ArrowUpOutlined, CaretDownOutlined, CloseOutlined, DoubleRightOutlined, DownOutlined, EllipsisOutlined, PlusOutlined } from '@ant-design/icons';

export interface Poc1ComponentProps {
    store: Store;
}

// interface Item {
//     type: 'rule' | 'cond';
//     title: string;
// }

export function Poc1Component(props: Poc1ComponentProps) {
    console.log(props);

    return (
        <div className="poc1-dash-line">
            <div>
                <CloseOutlined />
                <ArrowDownOutlined />
                <span className="poc1-condition">如果：</span>
                <DoubleRightOutlined />
            </div>
            <div className="poc1-line">
                <span className="poc1-space"></span>
                <div className="poc1-condition-op">
                    <span>并且</span>
                    <DownOutlined />
                </div>
                <EllipsisOutlined />
                <PlusOutlined />
                <div className="poc1-condition-key">
                    <CaretDownOutlined />
                    <span>余额</span>
                </div>
                <span className="poc1-rule-op">不等于</span>
                <span className="poc1-rule-value">空值</span>
                <CloseOutlined className="poc1-close" />
            </div>
            <div className="poc1-line">
                <span className="poc1-space"></span>
                <span className="poc1-condition">那么：</span>
                <PlusOutlined />
                <div className="poc1-dash-line">
                    <span className="poc1-rule">自增：</span>
                    <div className="poc1-rule-key">
                        <CaretDownOutlined />
                        <span>发卡额度</span>
                    </div>
                    <span className="poc1-rule-op">=</span>
                    <span className="poc1-rule-value">借款金额</span>
                    <CloseOutlined className="poc1-close" />
                </div>
            </div>
            <div className="poc1-line">
                <span className="poc1-space"></span>
                <span className="poc1-condition">否则：</span>
                <PlusOutlined />
            </div>
            <div className="poc1-line">
                <ArrowUpOutlined />
                <ArrowDownOutlined />
                <span className="poc1-rule">自增：</span>
                <div className="poc1-rule-key">
                    <CaretDownOutlined />
                    <span>五级分类名称</span>
                </div>
                <span className="poc1-rule-op">=</span>
                <span className="poc1-rule-value">还款状态名称</span>
                <CloseOutlined className="poc1-close" />
            </div>
            <div className="poc1-line">
                <ArrowUpOutlined />
                <span className="poc1-rule">局部规则：</span>
                <div className="poc1-rule-key">
                    <CaretDownOutlined />
                    <span>规则.脚本.bbb</span>
                </div>
                <CloseOutlined className="poc1-close" />
            </div>
        </div>
    );
}
