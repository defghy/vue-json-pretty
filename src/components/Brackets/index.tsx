import { defineComponent, PropType, h } from 'vue';
import './styles.less';

import { noop } from '../../utils'

export default defineComponent({
  props: {
    data: {
      required: true,
      type: String,
    },
    onClick: Function
  },

  setup(props, { emit }) {
    const onClick = (evt: Event) => emit('click', evt)

    return { onClick }
  },

  render(h) {
    const { data } = this;

    const { onClick } = this;

    return (
      <span class="vjs-tree-brackets" onClick={onClick || noop}>
        {data}
      </span>
    );
  },
});
