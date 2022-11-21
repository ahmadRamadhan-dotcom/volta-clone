<template>
  <header class="flex justify-center bg-gray-900">
    <HeaderContainer>
      <HeaderLogo />
      <HeaderList :list-data="links" />
      <HeaderLoginButton />
    </HeaderContainer>
  </header>
</template>

<script setup>
const links = [
  {
    id: 1,
    name: "Changelog",
    to: "/changelog",
  },
  {
    id: 2,
    name: "Pricing",
    to: "/pricing",
  },
  {
    id: 3,
    name: "Download",
    to: "/download",
  },
];
</script>
