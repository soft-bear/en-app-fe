<template>
  <b-container fluid>
	<b-row>
		<b-col>
			<slider />
		</b-col>
	</b-row>
    <b-row>
      <b-col cols="12" lg="6" md="6">
        <home-schorlarshipactive />
        <home-annouce />
      </b-col>
      <b-col cols="12" lg="6" md="6">
        <home-calendar />
      </b-col>
    </b-row>
    <nuxt />
  </b-container>
</template>
