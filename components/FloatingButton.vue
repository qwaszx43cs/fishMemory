<template>
	<transition name="grow">
		<button class="floating-button"
			v-if="!!selected"
			:class="{ 'floating-button__editing': !!editing }"
			:style="{ background: gradientColor }"
			@click="toggleEditing"
		>
			<i class="fa fa-plus"></i>
		</button>
	</transition>
</template>

<script>
	import { mapState, mapMutations, mapGetters } from 'vuex'
	
	export default {
		computed: {
			...mapState(['selected', 'editing', 'monthList']),
			...mapGetters(['currentMonthCard']),
			gradientColor() {
				const colorLeft = `color-stop(30%, ${this.currentMonthCard.colors[0]})`
				const colorRight = `to(${this.currentMonthCard.colors[1]})`
				return `-webkit-gradient(linear, left bottom, right top, ${colorLeft}, ${colorRight})`
			}
		},
		methods: {
			...mapMutations(['toggleEditing']),
		}
	}
</script>

<style>
.floating-button {
	display: flex;
	justify-content: center;
	align-items: center;
  position: fixed;
  right: 44px;
  bottom: 64px;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  border-radius: 44px;
  width: 44px;
  height: 44px;
  color: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
}

.floating-button__editing {
  right: 0;
  bottom: 0;
  width: 100%;
  border-radius: 0;
	z-index: 2;
}
.grow-leave-to,
.grow-enter {
  transform: scale(0);
}
.grow-enter-to,
.grow-leave {
  transform: scale(1);
}
.grow-enter-active {
  transition: all 0.2s 0.3s ease;
}
.grow-leave-active {
  transition: all 0.3s ease;
}

.fa-plus {
	font-size: 1.5rem;
}
</style>
