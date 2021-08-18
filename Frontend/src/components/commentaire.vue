<template>
    <div>
        <div class="row ">
            <div class="col-11">
                <h5>Qui commente</h5>
            </div>
            <div class="col">
                <span class="btn">x</span>
            </div>
        </div>
        <p>le Commentaire le texte du commentaire qui est plus long</p>
    </div>
    <div class="row align-items-center">
        <div class="col">
            <router-link to='/poste/:id/commentaire/:id'>
                <button class="btn me-3 w-25" type="button" data-bs-toggle="collapse" data-bs-target="#modifCommentaire" aria-expanded="false" aria-controls="modifCommentaire">
            Modifier
            </button>
            </router-link>
        </div>
    </div>
    <div class="collapse" id="modifCommentaire">
        <div class="card card-body">
            <label for="modifCom" class="form-label"></label>
            <div class="mb-3 md-mb-5">
                <textarea class="form-control" id="modifCom" rows="3" placeholder="Votre texte ici"></textarea>
            </div>
            <div class="row align-items-center">
                <div class="col">
                    <button type="submit" class="btn mb-3 w-25">Valider</button>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.btn{
    background-color: var(--bs-orange);
}
    
</style>