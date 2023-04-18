<template>
  <button :class="classList">
    <slot></slot>
  </button>
</template>
<script lang="ts" setup name="CButton">
import type { PropType, } from 'vue';
import { computed, defineProps } from 'vue';
import { Status, Size } from '../../_utils/constant';

const props = defineProps(
  {
    /**
     * @zh 按钮的类型，分为五种：次要按钮、主要按钮、虚框按钮、线性按钮、文字按钮。
     * @en Button types are divided into five types: secondary, primary, dashed, outline and text.
     * @defaultValue 'secondary'
     */
    type: {
      type: String as PropType<
        'primary' | 'secondary' | 'outline' | 'dashed' | 'text'
      >,
      default:'primary'
    },
    /**
     * @zh 按钮的形状
     * @en Button shape
     */
    shape: {
      type: String as PropType<'square' | 'round' | 'circle'>,
    },
    /**
     * @zh 按钮的状态
     * @en Button state
     * @values 'normal','warning','success','danger'
     * @defaultValue 'normal'
     */
    status: {
      type: String as PropType<Status>,
    },
    /**
     * @zh 按钮的尺寸
     * @en Button size
     * @values 'mini','small','medium','large'
     * @defaultValue 'medium'
     */
    size: {
      type: String as PropType<Size>,
    },
    /**
     * @zh 按钮的宽度是否随容器自适应。
     * @en Whether the width of the button adapts to the container.
     */
    long: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 按钮是否为加载中状态
     * @en Whether the button is in the loading state
     */
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 按钮是否禁用
     * @en Whether the button is disabled
     * @defaultValue false
     */
    disabled: {
      type: Boolean,
    },
    /**
     * @zh 设置 `button` 的原生 `type` 属性，可选值参考 [HTML标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type "_blank")
     * @en Set the native `type` attribute of `button`, optional values refer to [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type "_blank")
     */

  }
)
const classList = computed(() => {
  const { type, size, disabled, loading, shape, status, long } = props;
  return [
    'c-button',
    type && `c-button--${type}`,
    size && `c-button--${size}`,
    disabled && 'c-button--disabled',
    loading && 'c-button--loading',
    shape && `c-button--${shape}`,
    status && `c-button--${status}`,
    long && 'c-button--long',
  ];
});


</script>