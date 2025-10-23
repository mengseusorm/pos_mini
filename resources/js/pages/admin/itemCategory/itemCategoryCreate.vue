<template>
  <UseTemplate>
    <form class="grid items-start gap-4 px-4" @submit.prevent="handleSubmit">
      <div class="grid gap-2">
        <Label for="name">Name</Label>
        <Input id="name" type="text" v-model="form.name" />
      </div>

      <div class="grid gap-2">
        <Label for="description">Description</Label>
        <Textarea id="description" placeholder="Type your message here." v-model="form.description" />
      </div>

      <div class="grid gap-2">
        <Label>Status</Label>
        <RadioGroup v-model="form.status" class="grid gap-2">
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="r1" :value="1" />
            <Label for="r1">Active</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="r2" :value="0" />
            <Label for="r2">Inactive</Label>
          </div>
        </RadioGroup>
      </div>

      <Button type="submit">Save changes</Button>
    </form>
  </UseTemplate>

  <Dialog v-if="isDesktop" v-model:open="isOpen">
    <DialogTrigger as-child>
      <Button variant="outline">
        <PlusCircle /> Add Item Category
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Item Category</DialogTitle>
      </DialogHeader>
      <GridForm />
    </DialogContent>
  </Dialog>

  <Drawer v-else v-model:open="isOpen">
    <DrawerTrigger as-child>
      <Button variant="outline">Add Item Category</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader class="text-left">
        <DrawerTitle>Item Category</DrawerTitle>
        <DrawerDescription>Fill in the category details below and save when you're done.</DrawerDescription>
      </DrawerHeader>
      <GridForm />
      <DrawerFooter class="pt-2">
        <DrawerClose as-child>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>

<script lang="ts" setup>
import { createReusableTemplate, useMediaQuery } from "@vueuse/core"
import { ref, reactive, watch } from "vue"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusCircle } from "lucide-vue-next"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import axios  from "axios";
const [UseTemplate, GridForm] = createReusableTemplate()
const isDesktop = useMediaQuery("(min-width: 768px)")
const isOpen = ref(false)

const form = reactive({
  name: "",
  description: "",
  status: 1,
})

const reset = () => {
  form.name = ""
  form.description = ""
  form.status = 1
}

watch(isOpen, (value) => {
  if (!value) reset()
})

const handleSubmit = async () => {
    await axios.post('/admin/item-categories', { ...form }).then(res => {
        console.log('Item Category created successfully:', res.data);
        // if (res.status === 200) {
        //     isOpen.value = false;
        // }
    }).catch(error => {
        console.error('There was an error creating the Item Category:', error);
    });

}
</script>
