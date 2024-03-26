import Avatar from "$store/components/ui/Avatar.tsx";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "apps/commerce/types.ts";
import { relative } from "$store/sdk/url.ts";

interface Props {
  product: Product;
}

function VariantSelector({ product }: Props) {
  const { url, isVariantOf, additionalProperty } = product;
  const hasVariant = isVariantOf?.hasVariant ?? [];
  const possibilities = useVariantPossibilities(hasVariant, product);

  const displayAro = !!additionalProperty?.find((prop) =>
    prop.name === "SelecionarAro" && prop.value === "true" || prop.value === "Sim"
  );
  const displayCasal = false;

  return (
    <>
      <ul class="flex flex-col gap-4 hidden">
        {Object.keys(possibilities).map((name) => (
          <li class="flex flex-col gap-2">
            <span class="text-sm">{name}</span>
            <ul class="flex flex-row gap-3">
              {Object.entries(possibilities[name]).map(([value, link]) => {
                const relativeUrl = relative(url);
                const relativeLink = relative(link);
                return (
                  <li>
                    <button f-partial={relativeLink} f-client-nav>
                      <Avatar
                        content={value}
                        variant={relativeLink === relativeUrl
                          ? "active"
                          : relativeLink
                            ? "default"
                            : "disabled"}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
 

      {displayCasal == true && (
        <div id="aro-casal">
          <div class="flex flex-wrap items-center gap-3 pb-4">
            <div class="md:w-2/5">
              <label class="block text-sm text-base-300">Selecionar o aro <b class="text-base-300 text-secondary">Aliança "A"</b></label>
              <select class="aros min-height-unset h-auto color-[#707070] outline-none mt-2 py-1 rounded">
                <option value="empty">Medidas</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
              </select>
            </div>
            <div class="md:w-1/2">
              <label class="block text-sm text-base-300">Gravação <b class="text-base-300 text-secondary">Aliança "A"</b></label>
              <input type="text" class="aros min-height-unset h-auto color-[#707070] outline-none mt-2 py-1 rounded"></input>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <div class="md:w-2/5">
              <label class="block text-sm text-base-300">Selecionar o aro <b class="text-base-300 text-secondary">Aliança "B"</b></label>
              <select class="aros min-height-unset h-auto color-[#707070] outline-none mt-2 py-1 rounded">
                <option value="empty">Medidas</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
              </select>
            </div>
            <div class="md:w-1/2">
              <label class="block text-sm text-base-300">Gravação <b class="text-base-300 text-secondary">Aliança "B"</b></label>
              <input type="text" class="aros min-height-unset h-auto color-[#707070] outline-none mt-2 py-1 rounded"></input>
            </div>
          </div>
        </div>
      )}



      {displayAro === true && (
        <><div id="aro">
          <label class="block text-sm text-base-300">Selecionar o aro</label>
          <select class="aros min-height-unset h-auto color-[#707070] outline-none mt-2 py-1 rounded">
            <option value="empty">Medidas</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
          </select>
        </div>
        <span class="modal-medida mt-2 block fontsize-12px color-[#00c9a2] hover:text-success-content">
            <b>Não tem certeza do seu aro?</b> <a href="/guias-de-medidas" target="blank">Use nosso Guia de Medidas</a>
          </span></>
      )}
    </>
  );
}

export default VariantSelector;
