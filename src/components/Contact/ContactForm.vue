<!-- Contact form -->
<template>
    <div>
        <form>
            <div class="form-group">
                <input type="text" class="form-control" id="name" placeholder="Name *" required>
            </div>
            <div class="form-group">
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email *" required>
            </div>
            <div class="form-group">
            <textarea  class="form-control" id="message" placeholder="Message *" required ></textarea>
            </div>
            <div class="form-submit text-center">
                <button type="submit" class="btn btn-outline btn-white">Send</button>
            </div>
        </form>
    </div>
</template>

    <script>
    export default {
        name: 'ContactForm',
    }
</script>