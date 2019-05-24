<template>
    <div class="container m-t-20">
        <div class="l-seo">
            <div class="row">
                <div class="col-xs-24">
                    <h1 class="h1">
                        <span class="u-color-default">Joma.if.ua</span>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at autem doloremque eum explicabo
                        perspiciatis quaerat. Ad adipisci blanditiis expedita nobis odit quidem rem sequi voluptas? Dolore
                        reiciendis vitae voluptatum.
                    </div>
                    <b-collapse id="collapse">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at autem doloremque eum explicabo
                        perspiciatis quaerat. Ad adipisci blanditiis expedita nobis odit quidem rem sequi voluptas?
                        Dolore reiciendis vitae voluptatum.
                    </b-collapse>
                    <div class="u-textCenter">
                        <button class="description-toggle" type="button" v-b-toggle.collapse>
                            More...
                            <i class="toggle-arrow icon-sport_shop_icons-25"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .description-toggle {
        color: #3c76bf;
        position: relative;

        transition: all 0.3s ease;

        &.collapsed {
            .toggle-arrow {
                transform: scaleY(1);
            }
        }

        .toggle-arrow {
            transform: scaleY(-1);
        }

        &:hover {
            color: #ffffff;
        }
    }

    .toggle-arrow {
        position: absolute;
        display: inline-block;
        font-weight: bold;
        right: -20px;
        top: 5px;
    }
</style>